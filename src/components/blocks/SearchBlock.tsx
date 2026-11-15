'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  Filtration,
  FiltrationCheckboxFilter,
  FiltrationFooter,
  FiltrationPanel,
  FiltrationSection,
  FiltrationTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationOverflow,
  PaginationPrevious,
  SearchBox,
  Tag,
  paginationRange,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { SortIcon } from './block-icons';
import { fmt } from './block-format';

const PAGE_COUNT = 9;

export function SearchBlock() {
  const { c } = useCopy();
  const s = c.blocks.search;
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('relevant');
  const [picked, setPicked] = useState<string[]>([]);
  const [applied, setApplied] = useState(0);
  const slots = paginationRange(page, PAGE_COUNT);
  const options = s.categories.map((label) => ({ value: label, label }));

  return (
    <section className="block-search" aria-labelledby="block-search-title">
      <form
        role="search"
        aria-label={s.label}
        className="block-search__band"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="block-search__field">
          <SearchBox
            size="md"
            name="q"
            aria-label={s.label}
            placeholder={s.placeholder}
            defaultValue={s.query}
            clearLabel={s.clear}
            voiceLabel={s.voice}
          />
        </div>
        <Button type="submit" size="lg" className="block-search__submit">
          {s.button}
        </Button>
      </form>

      <div className="block-search__body">
        <div className="block-search__details">
          <div className="block-search__summary">
            <h2 id="block-search-title" className="block-search__title">
              {fmt(s.heading, { q: s.query })}
            </h2>
            <p className="block-search__count" aria-live="polite">
              {s.count}
            </p>
          </div>
          <div className="block-search__tools">
            <Filtration>
              <FiltrationTrigger>{s.filter}</FiltrationTrigger>
              <FiltrationPanel aria-label={s.filters}>
                <FiltrationSection
                  label={s.category}
                  count={picked.length}
                  formatCount={(n) => fmt(s.selected, { n })}
                >
                  <FiltrationCheckboxFilter
                    aria-label={s.category}
                    options={options}
                    value={picked}
                    onValueChange={setPicked}
                  />
                </FiltrationSection>
                <FiltrationFooter
                  applyLabel={s.apply}
                  clearLabel={s.clearFilters}
                  appliedCount={applied}
                  onApply={() => setApplied(picked.length)}
                  onClear={() => {
                    setPicked([]);
                    setApplied(0);
                  }}
                />
              </FiltrationPanel>
            </Filtration>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="lg" endIcon={<SortIcon />}>
                  {s.sort}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                  <DropdownMenuRadioItem value="relevant">{s.sortRelevant}</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="newest">{s.sortNewest}</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <ul className="block-search__results">
          {s.results.map((r) => (
            <li key={r.title}>
              <Card className="block-search__card">
                <CardHeader>
                  <CardTitle asChild>
                    <h3>{r.title}</h3>
                  </CardTitle>
                  <CardDescription>{r.desc}</CardDescription>
                </CardHeader>
                <CardContent className="block-search__tags">
                  {r.tags.map((tag) => (
                    <Tag key={tag} variant="secondary-subtle" shape="squared">
                      {tag}
                    </Tag>
                  ))}
                </CardContent>
                <CardFooter className="block-search__foot">
                  <Button asChild size="lg">
                    <a href="#">{s.action}</a>
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>

        <Pagination size="lg" aria-label={s.pagination}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                label={s.previous}
                href={`?page=${Math.max(1, page - 1)}`}
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.max(1, p - 1));
                }}
              />
            </PaginationItem>
            {slots.map((slot, i) => {
              if (slot === 'ellipsis') {
                const prev = slots[i - 1] as number;
                const next = slots[i + 1] as number;
                const hidden = Array.from({ length: next - prev - 1 }, (_, k) => prev + 1 + k);
                return (
                  <PaginationItem key={`gap-${i}`}>
                    <PaginationOverflow
                      label={s.morePages}
                      pages={hidden}
                      current={hidden.includes(page) ? page : undefined}
                      onSelect={setPage}
                    />
                  </PaginationItem>
                );
              }
              return (
                <PaginationItem key={slot}>
                  <PaginationLink
                    isActive={slot === page}
                    href={`?page=${slot}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(slot);
                    }}
                  >
                    {slot}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                label={s.next}
                href={`?page=${Math.min(PAGE_COUNT, page + 1)}`}
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.min(PAGE_COUNT, p + 1));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

export const searchCode = `import { useState } from 'react';
import {
  Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
  Filtration, FiltrationCheckboxFilter, FiltrationFooter, FiltrationPanel, FiltrationSection, FiltrationTrigger,
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
  SearchBox, Tag, paginationRange,
} from '@dev-dga/react';

export function SearchResults({ query, results, page, pageCount }) {
  const [picked, setPicked] = useState([]);

  return (
    <section aria-labelledby="results-title">
      <form role="search" action="/search" className="search__band">
        <SearchBox size="md" name="q" aria-label="Search the site" defaultValue={query} />
        <Button type="submit" size="lg">Search</Button>
      </form>

      <h1 id="results-title">Search results for “{query}”</h1>
      <p aria-live="polite">{results.length} results found</p>

      <Filtration>
        <FiltrationTrigger>Filter</FiltrationTrigger>
        <FiltrationPanel aria-label="Filters">
          <FiltrationSection label="Category" count={picked.length}>
            <FiltrationCheckboxFilter aria-label="Category" value={picked} onValueChange={setPicked}
              options={[{ value: 'services', label: 'Services' }, { value: 'news', label: 'News' }]} />
          </FiltrationSection>
          <FiltrationFooter appliedCount={picked.length} onApply={() => {}} onClear={() => setPicked([])} />
        </FiltrationPanel>
      </Filtration>

      <ul className="search__results">
        {results.map((r) => (
          <li key={r.href}>
            <Card>
              <CardHeader>
                <CardTitle asChild><h2>{r.title}</h2></CardTitle>
                <CardDescription>{r.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                {r.tags.map((t) => <Tag key={t} variant="secondary-subtle" shape="squared">{t}</Tag>)}
              </CardContent>
              <CardFooter><Button asChild size="lg"><a href={r.href}>Start</a></Button></CardFooter>
            </Card>
          </li>
        ))}
      </ul>

      <Pagination size="lg" aria-label="Search results pages">
        <PaginationContent>
          <PaginationItem><PaginationPrevious href={\`?page=\${page - 1}\`} /></PaginationItem>
          {paginationRange(page, pageCount).map((slot, i) =>
            slot === 'ellipsis' ? null : (
              <PaginationItem key={slot}>
                <PaginationLink isActive={slot === page} href={\`?page=\${slot}\`}>{slot}</PaginationLink>
              </PaginationItem>
            ),
          )}
          <PaginationItem><PaginationNext href={\`?page=\${page + 1}\`} /></PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}

/* search.css: DGA Search Page. Three result columns, 24px gaps.
.search__results { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--ddga-space-6); padding: 0; list-style: none; }
*/`;
