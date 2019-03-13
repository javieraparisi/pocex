<template>
  <div>
    <menuTop/>
    <div class="portfolio">
      <div v-if="portfolioData">
        <div class="latest_allocation withIcon">
          <div class="icon">
            <img src="../../assets/image-balance.png"/>
          </div>
          <div class="text">
              {{$t('portfolio.latest_allocation.balance')}}            
          </div>
          <div class="money">
              {{portfolioData.currency.symbol}}{{currency(portfolioData.latest_allocation.balance).format()}}
          </div>
          <div class="moneySmall">
              {{portfolioData.currency.symbol}}{{currency(portfolioData.latest_allocation.earnings).format()}}
          </div>
        </div>
        <div class="latest_allocation withOutIcon">
          <div class="text">  
              {{$t('portfolio.latest_allocation.earnings')}}            
          </div>
          <div class="money">
              {{portfolioData.currency.symbol}}{{currency(portfolioData.latest_allocation.earnings).format()}}
          </div>
        </div>
        <div class="latest_allocation withOutIcon">
          <div class="text">  
              {{$t('portfolio.latest_allocation.invested')}}            
          </div>
          <div class="money">
              {{portfolioData.currency.symbol}}{{currency(portfolioData.latest_allocation.invested).format()}}
          </div>
        </div>
      </div>
    </div>
    <div class="menu" id="menu" v-if="portfolioData">
        <div class="mockportfolio">
          <div class="icon">
            <img src="../../assets/image-gia.png"/>
          </div>
          <div class="title">
            {{portfolioData.name}}
          </div>
          <div class="date">
            {{$t('portfolio.createdIn')}}{{moment(portfolioData.created).format("MMMM YYYY")}}
          </div>
        </div>
        <div class="result">
          <div class="latest_allocations" id="latest_allocationsShow">
              <div class="title">
                {{$t('portfolio.latest_allocation.balance')}}
              </div>
              <div class="money">
                {{portfolioData.currency.symbol}}{{currency(portfolioData.latest_allocation.balance).format()}}
              </div>
          </div>
          <div class="latest_allocations" id="latest_allocationsShow">
              <div class="title">
                {{$t('portfolio.latest_allocation.earnings')}}
              </div>
              <div class="money">
                {{portfolioData.currency.symbol}}{{currency(portfolioData.latest_allocation.earnings).format()}}
              </div>
          </div>
           <div class="latest_allocations" id="latest_allocationsHide">
              <div class="title">
                {{$t('portfolio.latest_allocation.invested')}}
              </div>
              <div class="money">
                {{portfolioData.currency.symbol}}{{currency(portfolioData.latest_allocation.invested).format()}}
              </div>
          </div>
          <div class="latest_allocations" id="latest_allocationsHide">
              <div class="title">
                {{$t('portfolio.monthlyDeposit')}}
              </div>
              <div class="money">
                {{portfolioData.currency.symbol}}{{currency(portfolioData.autodeposit_amount).format()}}
              </div>
          </div>
          <div class="latest_allocations" id="latest_allocationsHide">
              <div class="title">
                {{$t('portfolio.riskLevel')}}
              </div>
              <div class="money">
                {{portfolioData.risk_level}}
              </div>
          </div>
          <div class="buttonBlueMin">
            {{$t('portfolio.buttons.fund')}}
          </div>
        </div>
      </div>
      <div class="transfers" v-if="listTransfers.length>0">
          <div class="transferActivity">
            {{$t('transfers.transferActivity')}}
          </div>
          <div class="transfer" id="transfer" 
            v-for="transfer in listTransfers" 
            v-bind:key="transfer.created"
            @click="showModalDetail(transfer)">
            <div class="nameAndState" id="nameAndState">
              <div class="name">
                {{transfer.portfolio.name}}
              </div>
              <div class="action" id="action">
                {{$t('transfers.items.' + transfer.item)}}
              </div>
            </div>
            <div class="created">
              {{moment(transfer.created).format("DD/MM/YYYY")}}
            </div>
            <div class="amount" id="amount" v-bind:class="{ 'negative': masters.tranfer.items.autodeposit != transfer.item }">
              {{portfolioData.currency.symbol}}{{currency(transfer.amount).format()}}
            </div>
            <div class="buttontransfer" id="buttontransfer" v-bind:class="[masters.tranfer.status.pending != transfer.status ? 'cancelled' : 'pending']">
                {{$t('transfers.status.' + transfer.status)}}
            </div>
          </div>
        </div>
        <modal name="detail-dialog">
          <div class="modalDetail" v-if="modalDetail">
            <div class="title">
              {{$t('dialogdetail.activityDetail')}}
            </div>
            <div class="row">
              <div class="rowtitle">
                {{$t('dialogdetail.name')}}
              </div>
              <div class="rowvalue">
                {{modalDetail.portfolio.name}}
              </div>
            </div>
            <div class="row">
              <div class="rowtitle">
                {{$t('dialogdetail.type')}}
              </div>
              <div class="rowvalue">
                {{$t('transfers.items.' + modalDetail.item)}}
              </div>
            </div>
            <div class="row">
              <div class="rowtitle">
                {{$t('dialogdetail.date')}}
              </div>
              <div class="rowvalue">
                {{moment(modalDetail.created).format("DD/MM/YYYY")}}
              </div>
            </div>
            <div class="row">
              <div class="rowtitle">
                {{$t('dialogdetail.amount')}}
              </div>
              <div class="rowvalue" v-bind:class="{ 'positive': masters.tranfer.items.autodeposit == modalDetail.item }">
                {{portfolioData.currency.symbol}}{{currency(modalDetail.amount).format()}}
              </div>
            </div>
            <div class="row">
              <div class="rowtitle">
                {{$t('dialogdetail.status')}}
              </div>
              <div class="rowvalue">
                  {{$t('transfers.status.' + modalDetail.status)}}
              </div>
            </div>
          </div>
        </modal>
  </div>
</template>

<style lang="scss">
  @import './less/portfolio.less';
  @import './less/menu.less';
  @import './less/buttons.less';
  @import './less/transfers.less';
  @import './less/modalActivityDetail.less';
</style>
