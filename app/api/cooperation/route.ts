import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const stmt = db.prepare(`
      INSERT INTO cooperation_applications (
        full_name, email, role, skills, motivation, resume_link
      ) VALUES (?, ?, ?, ?, ?, ?)
    `)

    stmt.run(
      data.fullName,
      data.email,
      data.role,
      data.skills,
      data.motivation,
      data.resumeLink || null
    )

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error saving cooperation application:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save application' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const applications = db.prepare('SELECT * FROM cooperation_applications ORDER BY created_at DESC').all()
    return NextResponse.json({ success: true, data: applications }, { status: 200 })
  } catch (error) {
    console.error('Error fetching cooperation applications:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}

