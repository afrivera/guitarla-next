import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>

          <div className={ styles.contenido }>
            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre Nosotros' />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue blandit egestas. Integer finibus tellus ac elit pretium fringilla. Sed rhoncus efficitur ante. Proin sed nibh condimentum odio faucibus facilisis et sit amet lectus. Phasellus ut nisl quis velit bibendum porta. Fusce vel neque placerat, venenatis felis a, iaculis diam. Aliquam mattis hendrerit odio, vel vulputate ligula laoreet vitae. Aliquam erat volutpat. Quisque quis tristique sem. Sed urna metus, gravida vitae rhoncus nec, aliquet ac nisi. Nunc convallis.</p>
              <p>Maecenas aliquam magna id enim rutrum, at ullamcorper enim venenatis. Pellentesque auctor ornare sollicitudin. Cras semper congue leo, nec lacinia nisl malesuada quis. Aliquam fermentum sodales diam in luctus. Vestibulum hendrerit velit id massa convallis fringilla..</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros