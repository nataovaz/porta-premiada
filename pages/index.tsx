import Cartao from "../components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica"
import { useState } from "react"
import Image from "next/image"
import github from '../img/github.png'




export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>

      <div>

        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} text="Qtde Portas?" />
        </Cartao>

      </div>
      <div>

        <Cartao>
          <EntradaNumerica value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} text="Porta com Presente?" />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} >
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>



      </div>

      <footer className={styles.rodape}>
            
            <Image src={github.src} height={30} width={30}  ></Image>
            <span className={styles.text}>

                nataovaz
            </span>
        </footer>
    </div>
  )
}

