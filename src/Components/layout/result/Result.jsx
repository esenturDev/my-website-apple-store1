import scss from './Result.module.scss';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
	{
		name: "Iphone11",
		href: "/",
	},
	{
		name: "Iphone12",
		href: "/Iphone12",
	},
	{
		name: "Iphone13",
		href: "/Iphone13",
	},
	{
		name: "Iphone14",
		href: "/Iphone14",
	},
  {
    name: 'Iphone15',
    href: "/Iphone15",
  }
];
export const Result = () => {
  const location = useLocation();
	console.log(location.pathname);
  return (
    <>
      <nav>
				<ul>
					{links.map((item, index) => (
						<li key={index}>
							<NavLink
								to={item.href}
								className={
									location.pathname === item.href
										? `${scss.link} ${scss.active}`
										: `${scss.link}`
								}>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
    </>
  )
}
