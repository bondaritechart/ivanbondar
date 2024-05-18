import { Routes } from 'constants/routes'
import { redirect } from 'next/navigation'

interface AccessControlOptions {
  searchParams: { [key: string]: string | string[] | undefined }
}

export class AccessControl {
  options: AccessControlOptions

  constructor(options: AccessControlOptions) {
    this.options = options
  }

  basePageProtection() {
    const { searchParams } = this.options
    if (!('access' in searchParams) || searchParams.access !== 'lorem') {
      redirect(Routes.ROOT)
    }
  }
}
