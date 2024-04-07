import { ProjectCard } from 'app/(website)/components/Projects/ProjectCard'
import { Stack } from 'components/ui'
import { projects } from 'data/projects'

export const Projects = () => {
  return (
    <Stack gap="spacing24" id="portfolio">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />
      })}
    </Stack>
  )
}
