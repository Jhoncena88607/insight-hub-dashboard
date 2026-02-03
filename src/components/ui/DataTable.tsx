import { ReactNode } from "react";
import { Download, ExternalLink } from "lucide-react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T, index: number) => ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  showActions?: boolean;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  showActions = false,
}: DataTableProps<T>) {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr className="bg-muted/30">
              {columns.map((col) => (
                <th key={String(col.key)}>{col.header}</th>
              ))}
              {showActions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (showActions ? 1 : 0)} className="text-center py-12 text-muted-foreground">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  {columns.map((col) => (
                    <td key={String(col.key)}>
                      {col.render
                        ? col.render(item, index)
                        : String(item[col.key as keyof T] ?? "")}
                    </td>
                  ))}
                  {showActions && (
                    <td>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors text-primary">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors text-primary">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
