import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const initialData = {
  backlog: {
    title: "Backlog",
    items: [
      { id: "1", title: "Add new movie: Avatar 3" },
      { id: "2", title: "Update ticket pricing" },
    ],
  },
  todo: {
    title: "To Do",
    items: [
      { id: "3", title: "Schedule weekend shows" },
    ],
  },
  progress: {
    title: "In Progress",
    items: [
      { id: "4", title: "Fix payment gateway issue" },
    ],
  },
  done: {
    title: "Done",
    items: [
      { id: "5", title: "UI redesign completed" },
    ],
  },
};

export default function KanbanPage() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];

    const sourceItems = Array.from(sourceCol.items);
    const destItems = Array.from(destCol.items);

    const [movedItem] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, movedItem);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems,
        },
      });
    } else {
      destItems.splice(destination.index, 0, movedItem);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destCol,
          items: destItems,
        },
      });
    }
  };

  return (
    <div className="p-6 text-black dark:text-white">
      <h2 className="text-xl font-semibold mb-6">
        Kanban Board
      </h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(columns).map(([colId, col]) => (
            <div
              key={colId}
              className="bg-white dark:bg-[#1e293b] rounded-xl p-4"
            >
              <h3 className="font-semibold mb-4">
                {col.title}
              </h3>

              <Droppable droppableId={colId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-3 min-h-[100px]"
                  >
                    {col.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="
                              bg-gray-100 dark:bg-[#0f172a]
                              p-3 rounded-lg
                              text-gray-700 dark:text-gray-300
                              border border-gray-200 dark:border-slate-700
                            "
                          >
                            {item.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
