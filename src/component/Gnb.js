import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
    const activeItem = 'home'
    const router = useRouter();

    const goLink = (e, data) => {
        if (data.name === 'home') {
            router.push('/')
        } else if (data.name === 'about') {
            router.push('/about')
        }
    }
    return (
        <Menu secondary>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={goLink}
            />
            <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={goLink}
            />
            <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={goLink}
            />

        </Menu>
    )
}