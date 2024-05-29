// Menu.js
import './Menu.module.scss';
import style from './Menu.module.scss';
import ListagemPaginasMenu from './ListagemPaginasMenu';

export default function Menu() {
  return (
    <div className={style.menu}>
      <ListagemPaginasMenu 
        opcoes={[
          'Home', 
          'Tarefas', 
          'Sobre'
        ]} 
      />
      <h1 className={style.appName}>Planejamento de Tarefas</h1>
      <span className={style.greeting}>Olá, Usuário</span>
    </div>
  );
};
