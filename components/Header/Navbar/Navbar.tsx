import React, { Component } from 'react'
import styles from './Navbar.module.sass'

export interface NavbarProps {

}

export default function Navbar(props: NavbarProps) {
    return (
        <div className={styles.Navbar}>
            <div>
                Menu
            </div>
            <div>
                Contact us
            </div>
        </div>
    )
}
