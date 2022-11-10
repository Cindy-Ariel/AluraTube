import config from '../confg.json'
import styled from 'styled-components'

function HomePage() {
    const cor = { background: 'red' }
    return (
        <div style={cor}>
            <Menu />
            <Header />
            <Timeline />
        </div>
    )
}
export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}

const StyleHeader = styled.div`
 img {
    width: 80px;
    height: 80px;
    border-radius:50%;
  }
    .user-info {
        display:flex;
        align-items: center;
        width:100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyleHeader>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>

                    <h2>
                        {config.name}
                    </h2>
                </div>

                <p>
                    {config.job}
                </p>

            </section>

        </StyleHeader>
    )
}
function Timeline() {
    return (
        <div>
            Timeline
        </div>
    )
}