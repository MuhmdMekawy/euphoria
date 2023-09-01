<script>
export default {
  name: 'DescTab',
  
}
</script>

<template>
  <div class="description">
    <p>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
    <table class="table table-bordered" >
      <thead>
        <tr>
          <th><span>Fabric</span><p>Bio-washed Cotton</p></th>
          <th><span>Pattern</span><p>Printed</p></th>
          <th><span>Fit</span><p>Regular-fit</p></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span>Neck</span><p>Round Neck</p></td>
          <td><span>Sleeve</span><p>Half-sleeves</p></td>
          <td><span>Style</span><p>Casual Wear</p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.description{
  p{
    color: #807D7E;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.32px;
    margin-bottom: 30px;
  }
  .table{
    border-radius: 12px !important;
    th , td{
      background: #F6F6F6;
      padding: 24px 48px;
      span{
        color: #807D7E;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 100% */
        letter-spacing: 0.32px;
      }
      p{
        color: #3C4242;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 100% */
        letter-spacing: 0.32px;
        margin-top: 12px !important;
        margin-bottom: 0;
      }
      @media (max-width : 767px){
        padding: 24px;
      }
      @media (max-width : 500px){
        padding: 24px 12px;
        span{
          font-size: 14px;
        }
        p{
          font-size: 14px;
        }
      }
      @media (max-width : 400px){
        p{
          font-size: 11px;
        }
      }
    }
  }
}
</style>