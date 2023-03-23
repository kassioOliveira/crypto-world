import React, { useEffect } from 'react'
import { GeralMarket } from '../../shared/components/MarketInfo/GeralMarket/GeralMarket'
import { Table } from '../../shared/components/Table/Table'
import { TableHead } from '../../shared/components/Table/TableHead'
import { LayoutBase } from '../../shared/layouts/LayoutBase/Layout'

export const Dashboard = () => {

  return (
    <LayoutBase>
      <GeralMarket/>
      {/* <Table>
        <TableHead>
  
        </TableHead>
      </Table> */}
    </LayoutBase>
  )
}
