import ExpressoTradicional from '../assets/coffees/expresso-tradicional.svg';
import ExpressoAmericano from '../assets/coffees/expresso-americano.svg';
import ExpressoCremoso from '../assets/coffees/expresso-cremoso.svg';
import ExpressoGelado from '../assets/coffees/expresso-gelado.svg';
import CafeComLeite from '../assets/coffees/cafe-com-leite.svg';
import Latte from '../assets/coffees/latte.svg';
import Capuccino from '../assets/coffees/capuccino.svg';
import Macchiato from '../assets/coffees/macchiato.svg';
import Mocaccino from '../assets/coffees/mocaccino.svg';
import ChocolateQuente from '../assets/coffees/chocolate-quente.svg';
import Cubano from '../assets/coffees/cubano.svg';
import Havaiano from '../assets/coffees/havaiano.svg';
import Arabe from '../assets/coffees/arabe.svg';
import Irlandes from '../assets/coffees/irlandes.svg';

export interface Coffee {
  id: string;
  name: string;
  description: string;
  image: string;
  categories: string[];
  price: number;
}

export const COFFEES: Coffee[] = [
  {
    id: 'f1bed7ec-5049-4dc1-9aae-09cad328503c',
    name: 'Expresso Tradicional',
    description: 'O tradicional café com água quente e grãos moídos',
    image: ExpressoTradicional,
    categories: ['tradicional'],
    price: 9.9,
  },
  {
    id: '295bb362-ca4a-47a0-a053-35f834b36944',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: ExpressoAmericano,
    categories: ['tradicional'],
    price: 9.9,
  },
  {
    id: '3e3812c2-c226-409a-b04f-70a0997006a7',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: ExpressoCremoso,
    categories: ['tradicional'],
    price: 9.9,
  },
  {
    id: '38071809-8c50-4645-93a2-8094e82e1f07',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: ExpressoGelado,
    categories: ['tradicional', 'gelado'],
    price: 9.9,
  },
  {
    id: '9b0ca2d8-76db-4b67-a86b-cfc1330f8217',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: CafeComLeite,
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 'ffa53844-7f97-4346-8458-2dba205ead0a',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: Latte,
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '1c4a3b2b-6490-4e1e-9eee-cc250499a233',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café leite e espuma',
    image: Capuccino,
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '2888c321-4b30-4898-8335-c5b0dbfb7795',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    image: Macchiato,
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '3b0f1949-773b-40b6-89ee-2bc83b5ae27d',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: Mocaccino,
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 'ff4c2311-0a99-4567-a842-3d7501683baf',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: ChocolateQuente,
    categories: ['especial', 'com leite'],
    price: 9.9,
  },
  {
    id: '2704eae9-7bf8-40da-967b-bc68fab77d10',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: Cubano,
    categories: ['tradicional', 'alcoólico', 'gelado'],
    price: 9.9,
  },
  {
    id: '1ae1b268-4e04-4224-938b-105aa6cf503b',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: Havaiano,
    categories: ['especial'],
    price: 9.9,
  },
  {
    id: 'a6069c93-14ed-4f7e-8eda-f95226344e55',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: Arabe,
    categories: ['especial'],
    price: 9.9,
  },
  {
    id: '9a23eeec-a72a-463a-96b6-8ae0e708f1d6',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: Irlandes,
    categories: ['especial', 'alcoólico'],
    price: 9.9,
  },
];
