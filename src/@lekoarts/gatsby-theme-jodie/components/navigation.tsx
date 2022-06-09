/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import { replaceSlashes } from "../utils/replace-slashes"
import useJodieConfig from "../hooks/use-jodie-config"

const Navigation = ({ bg }: { bg: string }) => {
  const { navigation, basePath } = useJodieConfig()

  return (
    <nav
      aria-label="Primary Navigation"
      sx={{
        a: {
          color: readableColor(bg),
          textDecoration: `none`,
          fontSize: [1, 2, 2, 3],
          marginLeft: [2, 3, 3, 0],
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        ul: {
          margin: 0,
          padding: 0,
          li: {
            listStyle: `none`,
            display: [`inline-block`, `inline-block`, `inline-block`, `block`],
          },
        },
        variant: `navigation`,
      }}
    >
      <ul>
           <li>
        <a href="https://ajstudiopro.setmore.com" target="_blank"> Schedule </a>
          </li>
        {navigation.map((navItem) => (
          <li key={navItem.slug}>
            <Link sx={(t) => ({ ...t.styles?.a })} to={replaceSlashes(`/${basePath}/${navItem.slug}`)}>
              {navItem.name}
            </Link>
          </li>
        ))}
        <li>
        <a href="http://www.instagram.com/ajstudiopro" target="_blank"> Instagram </a>
          </li>
       
          <li>
        <a href="https://ajstudiopro.substack.com/" target="_blank"> Blog </a>
          </li>

          <li>
            <a rel='nofollow' target='_blank' href='https://www.weddingwire.com' title='weddingwire.com'><img alt='weddingwire.com' src='https://www.weddingwire.com/images/sellos/partner--pp2098333.png' srcset='https://www.weddingwire.com/images/sellos/partner--pp2098333.png 1x, https://www.weddingwire.com/images/sellos/partner--pp2098333.png?largeImg=true 2x' style='border-width:0px;' /></a>
          </li>
      </ul>
    </nav>
  )
}

export default Navigation
