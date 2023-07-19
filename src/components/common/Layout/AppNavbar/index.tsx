import { Navbar, NavLink, ChevronIcon, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome2 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import routes, { RouteItem } from '../../../../routes';
interface AppNavbarProps { opened: boolean; }
const NavListItem = ({ route, opened }: { opened: boolean; route: RouteItem }) => {
    return opened ? (<Link to={route.path} key={route.name} style={{
        all: `unset`
    }}> {route?.subRoutes ? <NavLink label={route.name} key={route.name} icon={<route.icon />} >{route?.subRoutes.map(subRoute => <NavListItem route={subRoute} key={subRoute.name} opened={opened} />)}</NavLink> : <NavLink label={route.name} key={route.name} icon={<route.icon />} />}
    </Link>) : <Box m="8px 12px" display={'flex'} ><route.icon style={{ minWidth: 24 }} /></Box>
}
function AppNavbar({ opened }: AppNavbarProps) {
    const [isExpanded, { open, close }] = useDisclosure(false)
    return (
        <Navbar p={opened ? "md" : "xs"} hiddenBreakpoint="sm" hidden={!opened} width={isExpanded ? { sm: 200, lg: 300 } : { sm: 50, lg: 60 }} style={{ transition: `all 0.5s` }}>
            <NavLink label={!opened ? "Colapse" : ""} icon={<ChevronIcon transform={opened ? `rotate(90)` : `rotate(270)`} />} onClick={isExpanded ? close : open} />
            {
                routes.filter(e => !e?.isHidden).map(route => <NavListItem route={route} opened={isExpanded} />)
            }

        </Navbar>
    );
}
export default AppNavbar;   