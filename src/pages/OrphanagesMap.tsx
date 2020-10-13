import React from 'react';
import '../styles/global.css';
import '../styles/orphanages-map.css';
import Routes from '../routes';
import logoImg from '../images/logo.svg';
import { Link } from 'react-router-dom'
import {FiPlus} from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita ;)</p>
                </header>

                <footer>
                    <strong>Videira</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map
                center={[-27.0061605,-51.1577229]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;