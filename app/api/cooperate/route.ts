import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { fullName, email, role, skills, motivation, resumeLink } = body || {}

    if (!fullName || !email || !role || !skills || !motivation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const stmt = db.prepare(`
      INSERT INTO career_submissions
        (fullName, email, role, skills, motivation, resumeLink)
      VALUES
        (@fullName, @email, @role, @skills, @motivation, @resumeLink)
    `)

    stmt.run({
      fullName,
      email,
      role,
      skills,
      motivation,
      resumeLink: resumeLink || null,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error saving career submission', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}



