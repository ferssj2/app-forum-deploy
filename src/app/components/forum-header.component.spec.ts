import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForumHeaderComponent } from './forum-header.component';

describe('ForumHeaderComponent', () => {
    let component: ForumHeaderComponent;
    let fixture: ComponentFixture<ForumHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ForumHeaderComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ForumHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display forum title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Angular Forum');
    });

    it('should render navigation links', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const navLinks = compiled.querySelectorAll('.nav-link');
        expect(navLinks.length).toBe(4);
    });
});
