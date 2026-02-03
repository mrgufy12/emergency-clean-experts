/*
  # Add service_type column to contact_submissions table

  1. Changes
    - Add `service_type` column to `contact_submissions` table
      - Type: text
      - Nullable: true (to allow existing records to remain valid)
      - Description: Stores the type of service the customer needs

  2. Notes
    - This field captures which service the customer is requesting
    - Options include: Water Damage, Fire & Smoke Damage, Mold Remediation, 
      Biohazard Cleanup, Hoarding Cleanup, Odor Removal, Professional Cleaning, Other
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'service_type'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN service_type text;
  END IF;
END $$;