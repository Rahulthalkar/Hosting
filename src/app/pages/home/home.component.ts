import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class HomeComponent {

    bannerImg=[
        {
            id:1,
            img:'../../../assets/img/banner/7dcc28ed89760319.webp'
        },
        {
            id:1,
            img:'../../../assets/img/banner/9021283f0be266c1.webp'
        }, 
        {
            id:1,
            img:'../../../assets/img/banner/ef637eb93bf1a887.webp'
        }
    ]
}
