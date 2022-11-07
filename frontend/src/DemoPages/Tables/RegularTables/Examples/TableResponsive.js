import React from "react";
import { Table } from "reactstrap";

export default class TableResponsive extends React.Component {
  render() {
    return (
      <Table hover responsive className="mb-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID String</th>
            <th>Título</th>
            <th>Protocolo</th>
            <th>Status</th>
            <th>Taxa</th>
            <th>Carregando</th>
            <th>Última Conexão</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">981</th>
            <td>ENEL34</td>
            <td>Cond Vista Faria Lima 4</td>
            <td>ENELX</td>
            <td>Disponível</td>
            <td>1,99</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">960</th>
            <td>ENEL20</td>
            <td>Cond Vista Faria Lima 3</td>
            <td>ENELX</td>
            <td>Disponível</td>
            <td>1,99</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">60</th>
            <td>ENEL33</td>
            <td>Cond Vista Faria Lima 2</td>
            <td>ENELX</td>
            <td>Disponível</td>
            <td>1,99</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">531</th>
            <td>ENEL32</td>
            <td>Cond Vista Faria Lima 1</td>
            <td>ENELX</td>
            <td>Disponível</td>
            <td>1,99</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">912</th>
            <td>ENEL12</td>
            <td>Residencial Habitante Verde</td>
            <td>ENELX</td>
            <td>Disponível</td>
            <td>1,99</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">981</th>
            <td>ENEL17</td>
            <td>Premier Offices</td>
            <td>ENELX</td>
            <td>Disponível</td>
            <td>1,99</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">653</th>
            <td>ENEL18</td>
            <td>Posto Chafariz</td>
            <td>SIGFOX</td>
            <td>Disponível</td>
            <td>1,99</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">391</th>
            <td>ENEL19</td>
            <td>Posto Chafariz Filial 1</td>
            <td>SIGFOX</td>
            <td>Disponível</td>
            <td>1,99</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">341</th>
            <td>ENEL24</td>
            <td>Teste_HOME</td>
            <td>SIGFOX</td>
            <td>Disponível</td>
            <td>1</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">300</th>
            <td>ENEL10</td>
            <td>Teste_HOME_LINK_LOCAL</td>
            <td>SIGFOX</td>
            <td>Disponível</td>
            <td>1</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">325</th>
            <td>ENEL11</td>
            <td>DATA CABOS TESTE</td>
            <td>SIGFOX</td>
            <td>Disponível</td>
            <td>1</td>
            <td>Oscioso</td>
            <td>22-10-11 14:10:22</td>
            <td>
              <button class="pe-7s-help1 icon bg-night-fade"> </button>
            </td>
            <td>
              <button class="pe-7s-menu icon bg-night-fade"> </button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
