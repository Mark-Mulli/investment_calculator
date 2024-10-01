import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initial_investment  = signal("0")
  annual_investment = signal("0")
  expected_return = signal("5")
  duration = signal("10")

  calculate = output<InvestmentInput>()

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.initial_investment()),
      duration: Number(this.duration()),
      expectedReturn: Number(this.expected_return()),
      annualInvestment: Number(this.annual_investment())
    })
  }
}
