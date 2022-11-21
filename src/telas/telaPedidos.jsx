import axios from "axios";
import { Component } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

class Vender extends Component {
    state = {
        aProdutos: [],  // contém a lista de Produtos filtrados
    };
    async componentDidMount() {
        //    console.log("iniciando");
        try {
            const { data: aProdutos } = await axios.get("data/lista_Produtos.json");
            this.setState({ aProdutos: aProdutos });
        } catch (error) {
            console.log(error);
        }
    }

    const { id } = useParams()



// function getProdutos() {
//     return aProdutos.map((produto, i) => {
//         return (
//             <tr key={i} align='center' className='tabela'>
//                 <td>{produto.id}</td>
//                 <td>{produto.descrição}</td>
//                 <td>{produto.tab1.toFixed(2)}</td>
//                 <td>{produto.venda7d}</td>
//                 <td>{produto.venda15d}</td>
//                 <td>{produto.venda30d}</td>
//                 <td><input type="number" id='estoque' /></td>
//                 <td><input type="number" id='troca' /></td>
//                 <td><input type="number" id='venda' /></td>
//             </tr>
//         )
//     })
// }

render() {
    return (
        <>
            <header>
                {clientes.filter((cliente, i) => {
                    return (
                        <tbody>
                            <tr >
                                <td key={i} align='center' className='cabecario'>{`Código: ${cliente.id}`}</td>
                                <td key={i} align='center' className='cabecario'>{`Nome: ${cliente.nome}`}</td>
                                <td key={i} align='center' className='cabecario'>{`Cidade: ${cliente.cidade}`}</td>
                                <td key={i} align='center' className='cabecario'>{`Produtos: ${cliente.produtos}`}</td>
                            </tr>
                        </tbody>

                    )
                })}
            </header>
            <Table striped bordered hover id='tabelaCentralizada'>
                <thead >
                    <tr align='center'>
                        <th width="5%">Id</th>
                        <th width="20%">Descrição</th>
                        <th width="10%">Preço R$</th>
                        <th width="10%">Vendas 30d</th>
                        <th width="10%">Vendas 15d</th>
                        <th width="5%">Estoque</th>
                        <th width="5%">Troca</th>
                        <th width="5%">Venda</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.aProdutos.map((produto) => (
                        <tr key={i} align='center' className='tabela'>
                            <td>{produto.id}</td>
                            <td>{produto.descrição}</td>
                            <td>{produto.tab1.toFixed(2)}</td>
                            <td>{produto.venda7d}</td>
                            <td>{produto.venda15d}</td>
                            <td>{produto.venda30d}</td>
                            <td><input type="number" id='estoque' /></td>
                            <td><input type="number" id='troca' /></td>
                            <td><input type="number" id='venda' /></td>
                        </tr>))}
                </tbody>
            </Table>
            <a href="/clientes">Voltar</a>
        </>
    )
}}
export default Vender