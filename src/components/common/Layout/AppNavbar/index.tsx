import { Navbar, NavLink, ChevronIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome2 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import routes, { RouteItem } from '../../../../routes';
interface AppNavbarProps { opened: boolean; }
const NavListItem = ({ route }: { route: RouteItem }) => {
    return (<Link to={route.path} key={route.name} style={{
        all: `unset`
    }}> {route?.subRoutes ? route?.subRoutes.map(subRoute => <NavLink label={route.name} key={route.name} icon={<route.icon />} ><NavListItem route={subRoute} key={subRoute.name} /></NavLink>) : <NavLink label={route.name} key={route.name} icon={<route.icon />} />}
    </Link>)
}
function AppNavbar({ opened }: AppNavbarProps) {
    const [isExpanded, { open, close }] = useDisclosure(false)
    return (
        <Navbar p={opened ? "md" : "xs"} hiddenBreakpoint="sm" hidden={!opened} width={isExpanded ? { sm: 200, lg: 300 } : { sm: 50, lg: 60 }} style={{ transition: `all 0.5s` }}>
            <NavLink label={!opened ? "Colapse" : ""} icon={<ChevronIcon transform={opened ? `rotate(90)` : `rotate(270)`} />} onClick={isExpanded ? close : open} />
            {
                routes.filter(e => !e?.isHidden).map(route => <NavListItem route={route} />)
            }

        </Navbar>
    );
}
export default AppNavbar;   