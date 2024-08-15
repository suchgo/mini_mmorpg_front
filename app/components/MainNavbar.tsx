'use client';

import {Navbar, Container, Nav} from "react-bootstrap";
import Link from "next/link";
import {usePathname} from "next/navigation";

import HeroIcon from '../../public/icons/knight.svg';
import DungeonsIcon from '../../public/icons/torch.svg';
import EquipmentIcon from '../../public/icons/armor.svg';
import AbilitiesIcon from '../../public/icons/spell-book.svg';
import {StaticImageData} from "next/image";

export default function ClientNavbar() {
    interface Tab {
        path: string;
        label: string;
        title: string;
        icon: StaticImageData;
    }

    const currentPath = usePathname();
    const tabs: Tab[] = [
        {path: '/', label: 'Hero', title: 'Персонаж', icon: HeroIcon},
        {path: '/dungeons', label: 'Dungeons', title: 'Подземелья', icon: DungeonsIcon},
        {path: '/equipment', label: 'Equipment', title: 'Экипировка', icon: EquipmentIcon},
        {path: '/abilities', label: 'Abilities', title: 'Способности', icon: AbilitiesIcon},
    ];

    return (
        <Navbar bg="light" fixed="bottom">
            <Container>
                <Nav className="w-100 justify-content-around">
                    {tabs.map(tab => (
                        <Nav.Item key={tab.path}>
                            <Nav.Link as={Link}
                                      href={tab.path} eventKey={tab.path}
                                      className={`rounded ${currentPath === tab.path ? 'bg-dark-subtle' : ''}`}>
                                <div className="icon-container">
                                    <img src={tab.icon.src} alt={tab.label} className="icon"/>
                                </div>
                                <span className="nav-text">{tab.title}</span>
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
}
