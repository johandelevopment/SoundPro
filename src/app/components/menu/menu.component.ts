import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

//Submenu lateral
interface MenuNode {
  name: string;
  url: string;
  children?: MenuNode[];
}
interface SubMenuNode {
  expandable: boolean;
  name: string;
  level: number;
  url: string;
}
const TREE_DATA: MenuNode[] = [
  {
    name: 'LINEA DJ', url: '/home',
    children: [
      { name: 'Pioneer', url: '/product/pioneer' },
      { name: 'Traktor', url: '/product/traktor' },
      { name: 'Dennon', url: '/product/dennon-dj' },
    ]
  },
  {
    name: 'SONIDO', url: '/home',
    children: [
      { name: 'Jbl', url: '' },
      { name: 'Fbt', url: '' },
      { name: 'Electrovoice', url: '' },
      { name: 'Qsc', url: '' },
      { name: 'Rcf', url: '' },
      { name: 'Yorkville', url: '' },
      { name: 'Db technology', url: '' },
    ]
  },
  {
    name: 'MICROFONOS', url: '/home',
    children: [
      { name: 'Sennheiser', url: '' },
      { name: 'Shure', url: '' },
      { name: 'Akg', url: '' }
    ]
  },
  {
    name: 'AUDIFONOS', url: '/home',
    children: [
      { name: 'Pioneer', url: '' },
      { name: 'Akg', url: '' }
    ]
  },
  {
    name: 'LUCES', url: '/home',
    children: [
      { name: 'Shauvet', url: '' },
      { name: 'Big dipper', url: '' }
    ]
  },
  {
    name: 'ESTUDIO GRABACIÓN', url: '',
    children: [
      { name: 'Interfaz de audio', url: '' },
      { name: 'Monitores de estudio', url: '' },
      { name: 'Microfonos de condensador', url: '' },
      { name: 'Otros', url: '' }
    ]
  },

];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url: node.url
    };
  }
  treeControl = new FlatTreeControl<SubMenuNode>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;

  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private router: Router, private ren: Renderer2) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: SubMenuNode) => node.expandable;
  ngOnInit(): void {
  }
  navigate(module) {
    switch (module) {
      case 1:
        this.router.navigate(["/home"]);
        break;
      case 2:
        this.router.navigate(["/home"]).then(() => {
          this.router.navigate(["/product", "pioneer"]);
        });
        break;
      case 3:
        this.router.navigate(["/home"]).then(() => {
          this.router.navigate(["/product", "traktor"]);
        });
        break;
      case 4:
        this.router.navigate(["/home"]).then(() => {
          this.router.navigate(["/product", "dennon-dj"]);
        });
        break;
      case 23:
        this.router.navigate(["/contact"]);
        break;
      default:
        break;
    }

  }
  navigateMobile(node) {
    this.router.navigate(["/home"]).then(() => {
      this.router.navigate([node.url]);
    });
    this.sidenav.toggle();
  }
  //----------------------------
  menuenter() {
    this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    }
  }

  menuLeave(trigger, btn) {
    setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(btn['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(btn['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80)
  }

  buttonEnter(trigger) {
    setTimeout(() => {
      if (this.prevButtonTrigger && this.prevButtonTrigger != trigger) {
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu();
      }
      else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
        trigger.openMenu();
      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
      }
    })
  }

  buttonLeave(trigger, btn) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(btn['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(btn['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = false;
      }
    }, 100)
  }
}
