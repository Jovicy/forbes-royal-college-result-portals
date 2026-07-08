import React from "react";
import { Search, BookOpen, ChevronRight, XCircle, Printer, CheckCircle2 } from "lucide-react";
import Logo from "@/assets/favicon.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchStudent, type StudentResult, GRADING_SCALE } from "@/data/students";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const revealContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function SearchPortal() {
  const [searchId, setSearchId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<StudentResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [showGrading, setShowGrading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    setIsSearching(true);
    setHasSearched(false);

    const res = await searchStudent(searchId);

    setResult(res);
    setIsSearching(false);
    setHasSearched(true);
  };

  const resetSearch = () => {
    setResult(null);
    setHasSearched(false);
    setSearchId("");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted selection:bg-secondary/30">
      {/* Header */}
      <header className="border-b border-border bg-primary sticky top-0 z-50 print:hidden">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 cursor-pointer" onClick={resetSearch}>
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
              <img src={Logo} alt="logo" className="w-full h-full rounded-full" />
            </div>
            <div>
              <h1 className="font-serif text-base sm:text-xl font-bold text-primary-foreground leading-tight">
                Forbes Royal College
              </h1>
            </div>
          </div>

          <Button
            variant="ghost"
            className="text-primary-foreground/80 hover:text-secondary hover:bg-white/5 font-medium tracking-wide text-xs sm:text-sm px-2 sm:px-4 font-sans"
            onClick={() => setShowGrading(true)}
          >
            Grading Scale
          </Button>
        </div>
      </header>

      {/* Grading Scale Modal */}
      <Dialog open={showGrading} onOpenChange={setShowGrading}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto p-0 gap-0 print:hidden">
          <div className="px-5 sm:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent border border-border flex items-center justify-center text-primary mx-auto">
                <BookOpen size={24} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">Academic Grading System</h3>
              <p className="font-sans text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
                Forbes Royal College employs a rigorous evaluation standard to ensure excellence. Below is the
                official grading scale used for all evaluations.
              </p>
            </div>

            <Card className="overflow-hidden border-border shadow-sm">
              <div className="px-5 sm:px-6 py-4 border-b border-border bg-white">
                <h4 className="font-serif text-base sm:text-lg font-bold text-primary">
                  Standard Assessment Scale
                </h4>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground">Applicable to all senior secondary subjects</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-95 font-sans">
                  <thead>
                    <tr className="bg-accent/60 border-b border-border">
                      <th className="py-3 px-5 sm:px-6 font-medium text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                        Letter Grade
                      </th>
                      <th className="py-3 px-5 sm:px-6 font-medium text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                        Score Range
                      </th>
                      <th className="py-3 px-5 sm:px-6 font-medium text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-white">
                    {GRADING_SCALE.map((g) => (
                      <tr key={g.grade}>
                        <td className="py-3 sm:py-4 px-5 sm:px-6">
                          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded bg-primary text-primary-foreground font-serif font-bold text-sm sm:text-base">
                            {g.grade}
                          </span>
                        </td>
                        <td className="py-3 sm:py-4 px-5 sm:px-6 font-mono text-sm sm:text-base text-primary">
                          {g.min} &ndash; {g.max}%
                        </td>
                        <td className="py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base text-muted-foreground">
                          {g.remark}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="bg-accent/50 border border-border rounded-lg p-5 sm:p-6 text-center">
              <h4 className="font-serif text-base sm:text-lg font-bold text-primary mb-2">
                Need clarification on your result?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
                If you have questions regarding your evaluation or believe there has been a computation error,
                please contact your form teacher or the academic office within 14 days of result publication.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">

        {/* Dynamic Area */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            {!hasSearched ? (
              <motion.div
                key="search"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="print:hidden"
              >
                <div className="bg-primary relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[22px_22px]" />
                  <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24 relative">
                    <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
                      <div className="space-y-3 sm:space-y-4">
                        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                          Discover Your Potential
                        </h2>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed px-2 font-sans">
                          Access your entrance examination result securely. Enter your Student ID below to view your result and any accompanying remarks.
                        </p>
                      </div>

                      <form
                        onSubmit={handleSearch}
                        className="relative group bg-white rounded-lg shadow-lg p-1.5 flex flex-col sm:flex-row gap-1.5"
                      >
                        <div className="relative flex-1 flex items-center">
                          <div className="absolute left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-secondary transition-colors">
                            <Search size={20} />
                          </div>
                          <Input
                            type="text"
                            placeholder="e.g. FRC-25-01"
                            className="font-sans w-full border-0 pl-11 pr-4 py-5 sm:py-6 text-base sm:text-lg shadow-none focus-visible:ring-0 rounded uppercase transition-all placeholder:normal-case placeholder:text-muted-foreground/50 font-medium text-primary"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                            disabled={isSearching}
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSearching || !searchId.trim()}
                          className="font-sans bg-secondary hover:bg-secondary/90 text-primary font-semibold rounded h-auto py-5 sm:py-6 px-6 sm:px-8"
                        >
                          {isSearching ? (
                            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                          ) : (
                            <>
                              Check Result <ChevronRight size={16} className="ml-1" />
                            </>
                          )}
                        </Button>
                      </form>

                      <div className="font-sans flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/50">
                        <span className="flex items-center gap-2">
                          <span>Valid examples:</span>
                          <button
                            type="button"
                            onClick={() => setSearchId("FRC-25-01")}
                            className="text-secondary hover:text-secondary/80 transition-colors underline decoration-secondary/40 underline-offset-4"
                          >
                            FRC-25-01
                          </button>
                          <span className="text-white/30">&middot;</span>
                          <button
                            type="button"
                            onClick={() => setSearchId("FRC-25-04")}
                            className="text-secondary hover:text-secondary/80 transition-colors underline decoration-secondary/40 underline-offset-4"
                          >
                            FRC-25-04
                          </button>
                        </span>
                        {/* <span className="hidden sm:inline text-white/20">|</span> */}
                        {/* <span>
                          Current Term: {CURRENT_TERM} &middot; {TOTAL_STUDENTS} Students Enrolled
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center px-6 py-16 sm:py-24 gap-4">
                  <div className="w-14 h-14 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground shadow-sm">
                    <BookOpen size={26} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-primary">Ready to view your result?</h3>
                  <p className="font-sans text-muted-foreground max-w-sm text-sm sm:text-base">
                    Enter your Student ID above to view your official entrance examination result.
                  </p>
                </div>
              </motion.div>
            ) : result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="container mx-auto px-3 sm:px-6 py-8 sm:py-12 pb-16 sm:pb-24 print:p-0"
              >
                <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between print:hidden">
                    <button
                      onClick={resetSearch}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center text-xs sm:text-sm font-medium uppercase tracking-wider font-sans"
                    >
                      <ChevronRight size={16} className="mr-1 rotate-180" />
                      New Search
                    </button>
                    <Button
                      onClick={handlePrint}
                      variant="outline"
                      className="border-border bg-white text-primary hover:bg-muted text-xs sm:text-sm h-9 font-sans"
                    >
                      <Printer size={15} className="mr-1.5" /> Print Copy
                    </Button>
                  </div>

                  <motion.div
                    variants={revealContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <Card className="overflow-hidden border-border shadow-md print:shadow-none print:border-0">
                      {/* Result header band */}
                      <motion.div
                        variants={revealItem}
                        className="bg-primary text-primary-foreground px-5 sm:px-8 py-6 sm:py-8 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[20px_20px]" />
                        <div className="relative flex items-start justify-between gap-4">
                          <div className="space-y-1.5">
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
                              Official Statement of Result
                            </p>
                            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                              {result.name}
                            </h2>
                            <p className="text-xs sm:text-sm text-white/60 font-mono">
                              {result.id} &middot; {result.class} &middot; {result.term}
                            </p>
                          </div>
                          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/30 shrink-0">
                            <BookOpen size={22} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Stats row */}
                      <motion.div
                        variants={revealItem}
                        className="grid grid-cols-2 divide-x divide-border border-b border-border bg-white"
                      >
                        <div className="text-center py-4 sm:py-6 px-2">
                          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-1 sm:mb-2 font-sans">
                            Overall Grade
                          </div>
                          <div className="font-serif text-2xl sm:text-4xl font-bold text-primary">
                            {result.overallGrade}
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-4 sm:py-6 px-2 gap-1 sm:gap-1.5">
                          <motion.div
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.55, type: "spring", stiffness: 300, damping: 18 }}
                          >
                            <CheckCircle2 size={20} className="text-emerald-600" />
                          </motion.div>
                          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-emerald-700 font-medium font-sans">
                            Verified
                          </div>
                        </div>
                      </motion.div>

                      {/* Subjects Table */}
                      <motion.div variants={revealItem} className="px-5 sm:px-8 pt-5 sm:pt-6">
                        <h3 className="font-serif text-base sm:text-lg text-primary font-bold mb-3">
                          Subject Performance
                        </h3>
                      </motion.div>
                      <motion.div variants={revealItem} className="overflow-x-auto px-5 sm:px-8">
                        <table className="w-full text-left border-collapse min-w-95 font-sans">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="py-2.5 sm:py-3 font-medium text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                                Subject
                              </th>
                              <th className="py-2.5 sm:py-3 font-medium text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground w-20 sm:w-24 text-center">
                                Grade
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/60">
                            {result.subjects.map((subject, idx) => (
                              <motion.tr
                                key={idx}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.06, duration: 0.35, ease: "easeOut" }}
                              >
                                <td className="py-2.5 sm:py-3.5 font-medium text-primary text-sm sm:text-base">
                                  {subject.name}
                                </td>
                                <td className="py-2.5 sm:py-3.5 text-center">
                                  <span
                                    className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full font-serif font-bold text-xs sm:text-sm ${subject.grade === "F"
                                      ? "bg-destructive/10 text-destructive"
                                      : subject.grade.startsWith("A")
                                        ? "bg-secondary/20 text-primary border border-secondary/30"
                                        : "bg-muted text-primary"
                                      }`}
                                  >
                                    {subject.grade}
                                  </span>
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>

                      {/* Single general comment */}
                      <motion.div variants={revealItem} className="px-5 sm:px-8 py-5 sm:py-6 mt-2">
                        <div className="bg-accent/40 border-l-4 border-secondary rounded-r-lg p-4 sm:p-5">
                          <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-primary font-bold mb-2">
                            Form Teacher's Comment
                          </h4>
                          <p className="font-serif text-base sm:text-lg italic text-primary leading-relaxed">
                            "{result.overallRemark}"
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={revealItem}
                        className="px-5 sm:px-8 py-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-muted-foreground bg-muted/40 print:bg-transparent font-sans"
                      >
                        <p>Printed on {new Date().toLocaleDateString("en-GB")}</p>
                        <p className="italic">This is a certified digital transcript.</p>
                      </motion.div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="not-found"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center px-4 py-16 sm:py-24 print:hidden"
              >
                <div className="max-w-md w-full bg-white border border-border p-6 sm:p-8 rounded-xl shadow-lg text-center space-y-5 sm:space-y-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto">
                    <XCircle size={30} />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">Record Not Found</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    We could not locate an academic record for the ID{" "}
                    <span className="font-mono font-medium text-primary bg-muted px-2 py-0.5 rounded break-all">
                      {searchId}
                    </span>
                    .
                  </p>
                  <div className="pt-2 sm:pt-4 space-y-3">
                    <Button onClick={resetSearch} className="w-full bg-primary text-white hover:bg-primary/90">
                      Try Another Search
                    </Button>
                    <p className="text-sm text-muted-foreground">Need help? Contact the Registrar's Office.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-primary py-6 sm:py-8 mt-auto z-10 print:hidden">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-white/60 text-center md:text-left">
          <p className="font-sans">&copy; {new Date().getFullYear()} Forbes Royal College. All rights reserved.</p>
          <div className="font-serif italic mt-1 md:mt-0 text-secondary/90">"Excellence in Character and Learning"</div>
        </div>
      </footer>
    </div>
  );
}