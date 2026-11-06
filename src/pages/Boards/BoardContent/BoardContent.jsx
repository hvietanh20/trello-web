import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'

import { useState, useEffect } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  //Yeu cầu kéo thả phải di chuyển ít nhất 10px mới được kích hoạt, fix lỗi khi click vào column mà không di chuyển vẫn bị kích hoạt kéo thả
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  //Nhấn giữ 250ms mới được kích hoạt kéo thả, fix lỗi khi click vào column mà không di chuyển vẫn bị kích hoạt kéo thả
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  //Ưu tiên sử dụng mouseSensor trước, nếu không có thì mới sử dụng touchSensor, nếu không có thì mới sử dụng pointerSensor
  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumnsState, setOrderedColumnsState] = useState([])

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    // console.log('Drag ended:', event)
    const { active, over } = event

    //Kiểm tra xem thằng active.id có khác thằng over.id không, nếu giống nhau thì return luôn
    if (!over) return
    //Nếu vị trí mới khác vị trí cũ thì mới sắp xếp lại mảng columns
    if (active.id !== over.id) {
      //Lấy vị trí cũ từ thằng active.id và vị trí mới từ thằng over.id
      const oldIndex = orderedColumnsState.findIndex(column => column._id === active.id)
      const newIndex = orderedColumnsState.findIndex(column => column._id === over.id)

      //Dùng arrayMove để sắp xếp lại mảng columns ban đầu theo vị trí mới
      const dndOrderedColumn = arrayMove(orderedColumnsState, oldIndex, newIndex)
      // const dndOrderedColumnIds = dndOrderedColumn.map(c => c._id)

      // console.log('dndOrderedColumn:', dndOrderedColumn)
      // console.log('dndOrderedColumnIds:', dndOrderedColumnIds)

      //Cập nhập sau khi kéo thả
      setOrderedColumnsState(dndOrderedColumn)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'

      }}>
        <ListColumns columns={orderedColumnsState} />
      </Box>
    </DndContext>
  )
}

export default BoardContent

