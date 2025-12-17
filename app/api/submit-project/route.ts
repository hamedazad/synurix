import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      companyName,
      industry,
      companySize,
      contactPerson,
      email,
      projectTitle,
      problemDescription,
      aiRequirements,
      estimatedTimeline,
      dataAvailability,
      securityRequirements,
      budgetRange,
    } = body || {}

    if (
      !companyName ||
      !industry ||
      !companySize ||
      !contactPerson ||
      !email ||
      !projectTitle ||
      !problemDescription ||
      !Array.isArray(aiRequirements) ||
      aiRequirements.length === 0 ||
      !estimatedTimeline ||
      !dataAvailability ||
      !securityRequirements
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const stmt = db.prepare(`
      INSERT INTO project_submissions (
        companyName,
        industry,
        companySize,
        contactPerson,
        email,
        projectTitle,
        problemDescription,
        aiRequirements,
        estimatedTimeline,
        dataAvailability,
        securityRequirements,
        budgetRange
      ) VALUES (
        @companyName,
        @industry,
        @companySize,
        @contactPerson,
        @email,
        @projectTitle,
        @problemDescription,
        @aiRequirements,
        @estimatedTimeline,
        @dataAvailability,
        @securityRequirements,
        @budgetRange
      )
    `)

    stmt.run({
      companyName,
      industry,
      companySize,
      contactPerson,
      email,
      projectTitle,
      problemDescription,
      aiRequirements: JSON.stringify(aiRequirements),
      estimatedTimeline,
      dataAvailability,
      securityRequirements,
      budgetRange: budgetRange || null,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error saving project submission', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}



