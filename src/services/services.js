import React from 'react'
function ItemServices(props) {
    return (<div className="item">
        <img src={props.img}/>
        <p>{props.title}</p>
    </div>)

}
class Services extends React.Component{
    render() {
        return (<div id = "services" className="row services">
            <ItemServices img="prog.svg" title="Разработка"/>
            <ItemServices img="healf.svg" title="Сервис"/>
            <ItemServices img="protect.svg" title="Информационная безопасность"/>
            <ItemServices img="serv.svg" title="Серверное оборудование"/>
            <ItemServices img="switch.svg" title="Сетевое оборудование"/>
        </div>)
    }
}

export default Services
