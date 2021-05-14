import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Image from 'next/image'

export default class BarPage extends Component {

    render() {
        return (
            <div style={{
                height: "100vh"
            }}>
                <Header
                    barName="SpeakEasy"
                />
                <div>
                    <Image
                        src="/logo.png"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        )
    }
}
