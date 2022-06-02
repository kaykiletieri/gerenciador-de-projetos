import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Gerenciador de Projetos</span></h1>
            <p>Começe a gerenciar seus projetos agora mesmo!</p>

            <LinkButton to="/new-project" text="Criar Projeto" />

            <img src={savings} alt="img-home"></img>
        </section>
    )
}

export default Home