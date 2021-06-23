/*
 * Polkascan Explorer UI
 * Copyright (C) 2018-2021 Polkascan Foundation (NL)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InherentRoutingModule } from './inherent-routing.module';
import { InherentListComponent } from './inherent-list/inherent-list.component';
import { InherentDetailComponent } from './inherent-detail/inherent-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PolkadotAngularLibModule } from '../../../../../substrate-components-lib/polkadot-angular-lib.module';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [InherentListComponent, InherentDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InherentRoutingModule,
    PolkadotAngularLibModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class InherentModule {
}
