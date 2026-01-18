// Notion API Integration for High Tide Tours Booking System
// Database ID: c372aea0cdb9402288f7771dd32c8447
// Data Source: 512f53ff-3ab2-41ff-b1aa-1ac90e195f01

const NOTION_API_KEY = import.meta.env.VITE_NOTION_API_KEY;
const DATABASE_ID = 'c372aea0cdb9402288f7771dd32c8447';

/**
 * Create a new booking entry in Notion database
 * @param {Object} bookingData - The booking form data
 * @returns {Promise} - Notion API response
 */
export async function createBooking(bookingData) {
  const {
    name,
    email,
    phone,
    package: packageName,
    dates,
    numPeople,
    specialRequests,
    price,
    giftTier
  } = bookingData;

  // Determine gift tier based on package name
  const getGiftTier = (pkg) => {
    if (pkg.includes('🏆') || pkg.includes('Helicopter') || pkg.includes('Ocean Mastery') || pkg.includes('Sacred Retreat')) {
      return '🏆 Gold';
    } else if (pkg.includes('🥈') || pkg.includes('Surf') || pkg.includes('Sail') || pkg.includes('Moon') || pkg.includes('Joint') || pkg.includes('Rasta')) {
      return '🥈 Silver';
    } else {
      return '🥉 Bronze';
    }
  };

  // Calculate group discount
  const getGroupDiscount = (people) => {
    if (people >= 8) return '30% (8+ guests)';
    if (people >= 6) return '25% (6-8 guests)';
    if (people >= 4) return '20% (4-6 guests)';
    return 'None';
  };

  // Parse dates (simple format: "Feb 15-17, 2026" -> "2026-02-15")
  const parseTourDate = (dateString) => {
    // Try to extract a date from the string
    const dateMatch = dateString.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (dateMatch) {
      return dateMatch[0];
    }
    // If no ISO date found, return today's date + 7 days as placeholder
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    return futureDate.toISOString().split('T')[0];
  };

  // Create unique booking ID
  const bookingId = `${name.substring(0, 3).toUpperCase()}-${Date.now().toString().slice(-6)}`;

  const notionPayload = {
    parent: { database_id: DATABASE_ID },
    properties: {
      'Booking ID': {
        title: [
          {
            text: {
              content: bookingId
            }
          }
        ]
      },
      'Customer Name': {
        rich_text: [
          {
            text: {
              content: name
            }
          }
        ]
      },
      'Email': {
        email: email
      },
      'Phone': {
        phone_number: phone
      },
      'Package': {
        select: {
          name: packageName
        }
      },
      'Tour Date': {
        date: {
          start: parseTourDate(dates)
        }
      },
      'Guests': {
        number: parseInt(numPeople)
      },
      'Price': {
        number: parseFloat(price)
      },
      'Payment Status': {
        select: {
          name: '💳 Pending'
        }
      },
      'Booking Status': {
        select: {
          name: '🆕 New'
        }
      },
      'Booking Date': {
        date: {
          start: new Date().toISOString().split('T')[0]
        }
      },
      'Source': {
        select: {
          name: 'Website Form'
        }
      },
      'Special Requests': {
        rich_text: [
          {
            text: {
              content: specialRequests || 'None'
            }
          }
        ]
      },
      'Gift Tier': {
        select: {
          name: giftTier || getGiftTier(packageName)
        }
      },
      'Group Discount': {
        select: {
          name: getGroupDiscount(parseInt(numPeople))
        }
      },
      'Photographer Assigned': {
        checkbox: false
      },
      'Transport Arranged': {
        checkbox: false
      },
      'Cannabis Products Prepared': {
        checkbox: false
      }
    }
  };

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify(notionPayload)
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Notion API Error:', error);
      throw new Error(`Notion API error: ${error.message}`);
    }

    const data = await response.json();
    console.log('Booking created in Notion:', data.id);
    return data;
  } catch (error) {
    console.error('Failed to create booking:', error);
    throw error;
  }
}

/**
 * Send confirmation email (placeholder - integrate with SendGrid/Mailgun)
 */
export async function sendConfirmationEmail(bookingData) {
  // TODO: Integrate with email service
  console.log('Confirmation email would be sent to:', bookingData.email);
  return Promise.resolve({ sent: true });
}
