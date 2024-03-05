import { useState, useEffect, useMemo } from "react";

import { Icon } from "components/atoms/Icon";
import { Typography } from "components/atoms/Typography";

import { TableHeading } from "hooks/useStaticDataMock";
import { Question } from "hooks/useQuestion";

import styles from "./Table.module.scss";

type TableProps = {
  data: {
    isLoading: boolean;
    error: { response_code: number } | null;
    results: Question[];
  };
  columns: TableHeading[];
  pagination?: boolean;
};

export const Table = ({ data, columns, pagination }: TableProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sortBy, setSortBy] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      setQuestions(data.results);
      setTotalPages(Math.ceil(data.results.length / 10));
    };
    fetchQuestions();
  }, [data.results]);

  const sortedQuestions = useMemo(() => {
    if (!questions) return [];
    const sorted = [...questions];
    sorted.sort((a, b) => {
      if (sortBy === "asc") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    return sorted;
  }, [questions, sortBy]);

  const filteredAndSortedQuestions = useMemo(() => {
    let filtered = sortedQuestions;
    if (searchTerm) {
      filtered = filtered.filter((question) =>
        question.question.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    return filtered.slice((currentPage - 1) * 10, currentPage * 10);
  }, [sortedQuestions, searchTerm, currentPage]);

  const handleSortChange = () => {
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (data.isLoading) {
    return <Typography>Cargando...</Typography>;
  }

  if (data.error) {
    return <Typography mode="error">Error inesperado</Typography>;
  }

  return (
    <>
      <div className={styles.tableSearch}>
        <Icon icon="iconSearch" />
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.id}
                  onClick={() => {
                    if (col.sorteable) {
                      handleSortChange();
                    }
                  }}
                  style={{ cursor: col.sorteable ? "pointer" : "default" }}
                >
                  <span>
                    {col.name}
                    <span
                      className={styles.table__arrow}
                    >{`${col.sorteable ? (sortBy === "asc" ? "↑" : "↓") : ""}`}</span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedQuestions.map((question) => (
              <tr key={question.id}>
                <td>{question.id}</td>
                <td>{question.category}</td>
                <td>{question.type}</td>
                <td>{question.difficulty}</td>
                <td>{question.question}</td>
                <td>
                  <span className={styles.table__link}>
                    {question.createdBy}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className={styles.tablePagination}>
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              className={currentPage === pageNumber + 1 ? styles.active : ""}
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
