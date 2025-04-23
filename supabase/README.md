# Supabase Database Setup

This directory contains the database migrations and setup instructions for the KitaCare Hub application.

## Database Structure

### Facilities Table

The `facilities` table stores information about healthcare facilities:

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary key, auto-incrementing |
| name | TEXT | Facility name |
| type | TEXT | Type of facility (e.g., Government Clinic, Private Hospital) |
| address | TEXT | Full address |
| distance | FLOAT | Distance in kilometers |
| rating | FLOAT | Facility rating (0-5) |
| opening_hours | TEXT | Operating hours |
| phone | TEXT | Contact number |
| services | TEXT[] | Array of available services |
| created_at | TIMESTAMP | Record creation timestamp |
| updated_at | TIMESTAMP | Record last update timestamp |

## Setup Instructions

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `migrations/20240321_create_facilities.sql`
4. Paste into the SQL Editor and run the query

## Sample Data

The migration file includes sample data for testing:
- 5 healthcare facilities
- Various types (Government, Private, Community)
- Different services and operating hours
- Realistic addresses and contact information

## Indexes

- `facilities_distance_idx`: Index on the distance column for faster sorting and filtering

## Triggers

- `update_facilities_updated_at`: Automatically updates the `updated_at` timestamp when a record is modified

## Security

The table is accessible to anonymous users for reading only. To modify this:

1. Go to Authentication > Policies
2. Create a new policy for the facilities table
3. Set the appropriate permissions for different user roles

## API Usage

The facilities can be accessed through the Supabase client:

```javascript
const { data, error } = await supabase
  .from('facilities')
  .select('*')
  .order('distance', { ascending: true });
``` 