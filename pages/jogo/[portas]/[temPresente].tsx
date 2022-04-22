import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import {useRouter} from "next/router"
import Image from "next/image"
import github from '../../../img/github.png'
import styles2 from "../../../styles/Formulario.module.css"


export default function Jogo() {
    const router = useRouter()

    const [valido, setValido ] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() =>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdePortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qtdePortasValidas && temPresenteValido)
    }, [portas])    

    useEffect(() =>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])    


    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => {
                setPortas(atualizarPortas(portas, novaPorta))
            }} />
        })
    }

    return (
        <div id={styles.jogo}>
            
            <div className={styles.portas}>
                {valido ? renderizarPortas() :
                <h1>Valores inválidos</h1>
                }

            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar</button>
                </Link>
            </div>

            <footer className={styles2.rodape}>
            
            <Image src={github.src} height={30} width={30}  ></Image>
            <span className={styles2.text}>

                nataovaz
            </span>
        </footer>

        </div>

        
    )
}