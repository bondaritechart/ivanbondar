export interface PageBaseProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
