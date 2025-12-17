import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const stmt = db.prepare(`
      INSERT INTO career_applications (
        full_name, email, phone, location, profile_url,
        role_of_interest, years_of_experience, key_skills,
        motivation, availability
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)

    stmt.run(
      data.fullName,
      data.email,
      data.phone,
      data.location,
      data.profileUrl || null,
      data.roleOfInterest,
      data.yearsOfExperience,
      data.keySkills,
      data.motivation,
      data.availability
    )

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error saving career application:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save application' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const applications = db
      .prepare('SELECT * FROM career_applications ORDER BY created_at DESC')
      .all()
    return NextResponse.json({ success: true, data: applications }, { status: 200 })
  } catch (error) {
    console.error('Error fetching career applications:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}

