import React, { useState, useEffect } from "react";
import "./rds-tree-structure.css";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsTreeStructureProps {
  level?: "level1" | "level2" | "level3" | "level4";
  showChewron?: boolean;
  showCheckbox?: boolean;
  showFolder?: boolean;
  showFileIcon?: boolean;
  showCollapsed?: boolean;
  state?: "default" | "hover" | "selected";
  folderType?: "circle" | "folder";
}

const treeData = [
        {
          id: 1,
          name: "Name 1",
          icon: "folder",
          children: [
            {
              id: 2,
              name: "Name 2",
              icon: "folder",
              children: [
                {
                  id: 3,
                  name: "Name 3",
                  icon: "file",
                  children: [
                    {
                      id: 4,
                      name: "Name 4",
                      icon: "file",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: "Name 5",
          icon: "folder",
          children: [
            {
              id: 6,
              name: "Name 6",
              icon: "folder",
              children: [
                {
                  id: 7,
                  name: "Name 7",
                  icon: "file",
                  children: [
                    {
                      id: 8,
                      name: "Name 8",
                      icon: "file",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 9,
          name: "Name 9",
          icon: "folder",
          children: [
            {
              id: 10,
              name: "Name 10",
              icon: "folder",
              children: [
                {
                  id: 11,
                  name: "Name 11",
                  icon: "file",
                  children: [
                    {
                      id: 12,
                      name: "Name 12",
                      icon: "file",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 13,
          name: "Name 13",
          icon: "folder",
          children: [
            {
              id: 14,
              name: "Name 14",
              icon: "folder",
              children: [
                {
                  id: 15,
                  name: "Name 15",
                  icon: "file",
                  children: [
                    {
                      id: 16,
                      name: "Name 16",
                      icon: "file",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];

const TreeNode = ({
  node,
  level,
  maxLevel,
  props,
  expandedNodeIds,
  hoveredNodeId,
  setHoveredNodeId,
  onNodeClick,
  onCheckboxClick,
}: {
  node: any;
  level: number;
  maxLevel: number;
  props: RdsTreeStructureProps;
  expandedNodeIds: number[];
  hoveredNodeId: number | null;
  setHoveredNodeId: (id: number | null) => void;
  onNodeClick: (id: number) => void;
  onCheckboxClick: (id: number) => void;
}) => {
  const isExpanded = expandedNodeIds.includes(node.id);
  const isHovered = hoveredNodeId === node.id;

  const handleClick = () => {
    onNodeClick(node.id);
  };

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCheckboxClick(node.id);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHoveredNodeId(node.id);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHoveredNodeId(null);
  };

  return (
    <div
      className="tree-node-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`tree-node p-1 cursor-pointer ${props.state === "hover" ? "nodehover" : ""}`}
        style={{ marginLeft: level * 20 }}
        onClick={handleClick}
      >
        <div className="d-flex align-items-center p-3 ">
          {(node.children && level < maxLevel && props.showChewron) && (
            <span
              className="me-2 cursor-pointer"
              style={{
                transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            >
              <RdsIcon
                height="16px"
                width="16px"
                name="chevron_right"
                fill={false}
                stroke={true}
              />
            </span>
          )}
          {props.showCheckbox && (
            <input
              className="me-2"
              type="checkbox"
              onClick={handleCheckboxClick}
            />
          )}
          {props.showFolder && (
            <span style={{ color: "#FFA500", marginRight: 5 }}>
              {props.folderType === "circle" ? (
                <span
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#CDCDCD",
                    borderRadius: "50%",
                  }}
                ></span>
              ) : (
                <RdsIcon
                  height="18px"
                  width="18px"
                  name="treefolder"
                  fill={false}
                  stroke={false}
                />
              )}
            </span>
          )}
          {props.showFileIcon && <span style={{ color: "#0066cc" }}>TS</span>}
          <span style={{ marginLeft: 5 }}>{node.name}</span>
          {isHovered && (
            <div className="ms-auto d-flex btngroup">
              <span className="p-2 customborder">
                <RdsIcon
                  height="16px"
                  width="16px"
                  name="plus"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </span>
              <span className="p-2 customborder">
                <RdsIcon
                  height="16px"
                  width="16px"
                  name="edit"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </span>
              <span className="p-2 customborder">
                <RdsIcon
                  height="16px"
                  width="16px"
                  name="delete"
                  fill={false}
                  stroke={true}
                  colorVariant="primary"
                />
              </span>
            </div>
          )}
        </div>
      </div>
      {isExpanded &&
        node.children &&
        level < maxLevel &&
        node.children.map((child: any) => (
          <div className="tree-node-children" key={child.id}>
            <TreeNode
              node={child}
              level={level + 1}
              maxLevel={maxLevel}
              props={props}
              expandedNodeIds={expandedNodeIds}
              hoveredNodeId={hoveredNodeId}
              setHoveredNodeId={setHoveredNodeId}
              onNodeClick={onNodeClick}
              onCheckboxClick={onCheckboxClick}
            />
          </div>
        ))}
    </div>
  );
};

const RdsTreeStructure = (props: RdsTreeStructureProps) => {
  const [expandedNodeIds, setExpandedNodeIds] = useState<number[]>([]);
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);

  useEffect(() => {
    if (props.showCollapsed) {
      setExpandedNodeIds([]);
    } else {
      const allNodeIds = getAllNodeIds(treeData);
      setExpandedNodeIds(allNodeIds);
    }
  }, [props.showCollapsed]);

  const handleNodeClick = (id: number) => {
    setExpandedNodeIds((prevExpandedNodeIds) =>
      prevExpandedNodeIds.includes(id)
        ? prevExpandedNodeIds.filter((nodeId) => nodeId !== id)
        : [...prevExpandedNodeIds, id]
    );
  };

  const handleCheckboxClick = (id: number) => {
    console.log(`Checkbox clicked for node ${id}`);
    // Add your custom logic here
  };

  const maxLevel = parseInt(props.level?.replace('level', '') || '1');

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          level={1}
          maxLevel={maxLevel}
          props={props}
          expandedNodeIds={expandedNodeIds}
          hoveredNodeId={hoveredNodeId}
          setHoveredNodeId={setHoveredNodeId}
          onNodeClick={handleNodeClick}
          onCheckboxClick={handleCheckboxClick}
        />
      ))}
    </div>
  );
};

const getAllNodeIds = (nodes: any[]): number[] => {
  let ids: number[] = [];
  nodes.forEach((node) => {
    ids.push(node.id);
    if (node.children) {
      ids = ids.concat(getAllNodeIds(node.children));
    }
  });
  return ids;
};

export default RdsTreeStructure;