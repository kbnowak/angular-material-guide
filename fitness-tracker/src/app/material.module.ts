import { NgModule } from "../../node_modules/@angular/core";
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from "@angular/material";

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {}