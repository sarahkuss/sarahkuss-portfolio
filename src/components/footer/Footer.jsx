export default function Footer () {
  const currentYear = new Date().getFullYear()
  const githubURL = 'https://github.com/sarahkuss/sarahkuss-portfolio'

  return (
    <footer>
      <p>
        <a href={githubURL}
        target="blank"
        rel="noreferrer">
          Code in Github
        </a>
        <div>
          <small>&copy; {currentYear} Sarah Kuss</small>
        </div>
      </p>
    </footer>
  )
}