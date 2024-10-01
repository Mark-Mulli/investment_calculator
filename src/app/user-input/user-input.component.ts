import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment.model';
import { InvestmentService } from '../investment.service';

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

  constructor(private investmentService: InvestmentService ) {}

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: Number(this.initial_investment()),
      duration: Number(this.duration()),
      expectedReturn: Number(this.expected_return()),
      annualInvestment: Number(this.annual_investment())
    })
  }
}
