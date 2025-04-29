import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { HomePage } from '../components/HomePage';
import { Jogini } from '../components/Jogini';
import { Letenky } from '../components/Letenky';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {
      <>
        <Jogini />
        <Letenky />
      </>
      //<HomePage content="Tady bude můj super obsah stránky" title="Moje super stránka" user="Radim" author="Filip 2" />
    }

  </div>
);