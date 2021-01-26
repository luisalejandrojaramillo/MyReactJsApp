import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <div>
                <div class="enlaces-registro">
                    <a href="/registro">Registro</a>|
                    <a href="/inicio">Inicio Sesión</a>
                </div>
                <a href="/" class="logo">Blog de Viajes</a>
                <a href="/" class="button"><span class="icon-home"></span> Inicio</a>
                <a href="/autores" class="button"><span class="icon-user"></span> Autores</a>
            </div>
            
        )
    }
}