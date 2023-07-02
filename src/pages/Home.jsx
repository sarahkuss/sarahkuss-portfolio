import Intro from "../components/intro/Intro"
import NavMenu from "../components/navmenu/NavMenu"
import Projects from "../components/projects/Projects"

export default function Home () {
  return(
    <>
    <NavMenu />
    <Intro />
    <Projects />
    </>
  )
}