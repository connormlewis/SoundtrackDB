import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { UISref } from '@uirouter/react';
import * as _ from 'lodash';

export default class SDBPagination extends Component {
  getPreviousButtons() {
    let previousButtonCount = Math.min(this.toatlRemainingPages >= 2 ? 2 : this.maxOtherPagesToShow - this.toatlRemainingPages, this.totalPreviousPages)
    return _.times(previousButtonCount, (val) => {
      return (
        <PaginationItem>
          <UISref to={this.props.state} params={{ offset: this.props.offset - this.props.limit }}>
            <PaginationLink>{this.currentPage + 1 - (previousButtonCount - val)}</PaginationLink>
          </UISref>
        </PaginationItem>
      )
    })
  }

  getNextButtons() {
    let nextButtonCount = Math.min(this.totalPreviousPages >= 2 ? 2 : this.maxOtherPagesToShow - this.totalPreviousPages, this.toatlRemainingPages)
    return _.times(nextButtonCount, (val) => {
      return (
        <PaginationItem>
          <UISref to={this.props.state} params={{ offset: this.props.offset + (this.props.limit * (val + 1)) }}>
            <PaginationLink>{this.currentPage + 2 + val}</PaginationLink>
          </UISref>
        </PaginationItem>
      )
    })
  }

  render() {
    this.maxOtherPagesToShow = 4;
    this.totalPages = Math.ceil(this.props.total / this.props.limit);
    this.currentPage = this.props.offset / this.props.limit;
    this.totalPreviousPages = this.currentPage;
    this.toatlRemainingPages = this.totalPages - this.currentPage - 1;

    return (
      <div className="col-12">
        <Pagination className="justify-content-center">
          <PaginationItem>
            {
              this.currentPage === 0 ? <PaginationLink disabled><i class="fas fa-angle-double-left"></i></PaginationLink> :
                <UISref to={this.props.state} params={{ offset: 0 }}>
                  <PaginationLink><i class="fas fa-angle-double-left"></i></PaginationLink>
                </UISref>
            }
          </PaginationItem>
          <PaginationItem>
            {
              this.currentPage === 0 ? <PaginationLink disabled><i class="fas fa-angle-left"></i></PaginationLink> :
                <UISref to={this.props.state} params={{ offset: this.props.offset - this.props.limit }}>
                  <PaginationLink><i class="fas fa-angle-left"></i></PaginationLink>
                </UISref>
            }
          </PaginationItem>

          {this.getPreviousButtons()}

          <PaginationItem>
            <PaginationLink disabled>{this.currentPage + 1}</PaginationLink>
          </PaginationItem>

          {this.getNextButtons()}

          <PaginationItem>
            {
              this.currentPage === this.totalPages - 1 ? <PaginationLink disabled><i class="fas fa-angle-right"></i></PaginationLink> :
                <UISref to={this.props.state} params={{ offset: this.props.offset + this.props.limit }}>
                  <PaginationLink><i class="fas fa-angle-right"></i></PaginationLink>
                </UISref>
            }
          </PaginationItem>
          <PaginationItem>
            {
              this.currentPage === this.totalPages - 1 ? <PaginationLink disabled><i class="fas fa-angle-double-right"></i></PaginationLink> :
                <UISref to={this.props.state} params={{ offset: (this.totalPages - 1) * this.props.limit }}>
                  <PaginationLink><i class="fas fa-angle-double-right"></i></PaginationLink>
                </UISref>
            }
          </PaginationItem>
        </Pagination>
      </div>
    )
  }
}