import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Component } from 'react';


class Clientes extends Component {
    state = {
        aClientes: [],  // contém a lista de clientes filtrados
      };
    async componentDidMount() {
        //    console.log("iniciando");
        try {
            const { data: aClientes } = await axios.get("data/lista_clientes.json");
            this.setState({ aClientes: aClientes });
        } catch (error) {
            console.log(error);
        }
    }


  

    render() {
        return (
            <>
                <Table>
                    <thead>
                        <tr align='center'>
                            <th width='15%'>Código</th>
                            <th width='40%'>Nome do Cliente</th>
                            <th width='20%'>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.aClientes.map((cliente) => (
                            <tr key={cliente.id} align='center' className='tabela'>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cidade}</td>
                            <td><a href={`/clientes/pedidos/${cliente.id}`}>Vender</a></td>
                        </tr>))}
                    </tbody>
                </Table>
            </>
        )


    }
}

export default Clientes